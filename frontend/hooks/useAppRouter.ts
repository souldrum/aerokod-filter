import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useAppRouter = () => {
  const router = useRouter();
  const path = usePathname();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const setQuery = (name: string, value: string) => {
    params.set(name, value);

    pushQuery();
  };

  const setQueries = (queries: { name: string; value: string }[]) => {
    queries.forEach(({ name, value }) => {
      params.set(name, value);
    });

    pushQuery();
  };

  const appendQuery = (name: string, value: string) => {
    if (params.has(name, value)) {
      params.delete(name, value);
      pushQuery();
      return;
    }

    params.append(name, value);
    pushQuery();
  };

  const deleteQuery = (name: string, value?: string) => {
    params.delete(name, value);
    pushQuery();
  };

  const clearQuery = () => router.replace(path);

  const pushQuery = () => router.push(`?${params.toString()}`);

  return {
    setQuery,
    appendQuery,
    clearQuery,
    setQueries,
    deleteQuery,
  };
};
