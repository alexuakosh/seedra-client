export default function RenderComponent({
  loading,
  data = [],
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = error => (
    <pre>{JSON.stringify(error, null, 2)}</pre>)
}) {
  switch (loading) {
    case "idle":
      return loadingFallback;
    case "loading":
      return loadingFallback;
    case "error":
      return renderError;
    default:
      return renderSuccess({ data });
  }

}