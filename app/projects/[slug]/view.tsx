"use client";

import { useEffect } from "react";

export const ReportView: React.FC<{ slug: string; type: string }> = ({
  slug,
  type,
}) => {
  useEffect(() => {
    fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug, type }),
    });
    console.log('use effet')
  }, [slug]);

  return null;
};
