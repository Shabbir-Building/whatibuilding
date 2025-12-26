export default async function PublicPortfolioPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return <h1>Portfolio of {username}</h1>;
}
