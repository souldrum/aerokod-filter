import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export const useAppRouter = () => {
  const router = useRouter();
  const path = usePathname();

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const setQuery = (name: string, value: string) => {
    params.set(name, value);
    router.push(`?${params.toString()}`);
  };

  const appendQuery = (name: string, value: string) => {
    if (params.has(name, value)) {
      params.delete(name, value);
      router.push(`?${params.toString()}`);
      return;
    }

    params.append(name, value);
    router.push(`?${params.toString()}`);
  };

  const clearQuery = () => router.replace(path);

  return {
    setQuery,
    appendQuery,
    clearQuery,
  };
};
