export default async function ReportView({ slug }: { slug: string }) {
  await fetch(process.env.LCURL + "api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  })
    .then((response) => console.log("work"))
    .catch((err) => console.error(err));
  return null;
}
