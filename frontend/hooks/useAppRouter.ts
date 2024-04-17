import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const useAppRouter = () => {
  const router = useRouter();
  const path = usePathname();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const pushQuery = (name: string, value: string) => {
    params.set(name, value);
    router.push(`?${params.toString()}`);
  };

  const clearQuery = () => router.replace(path);

  return React.useMemo(
    () => ({ pushQuery, clearQuery }),
    [pushQuery, clearQuery]
  );
};
