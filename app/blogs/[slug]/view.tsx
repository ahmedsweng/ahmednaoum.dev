export default async function ReportView({
  slug,
  type,
}: {
  slug: string;
  type: string;
}) {
  await fetch(process.env.LCURL + "api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug, type }),
  })
    .then((response) => console.log("work"))
    .catch((err) => console.error(err));
  console.log(JSON.stringify({ slug, type }));
  return null;
}
