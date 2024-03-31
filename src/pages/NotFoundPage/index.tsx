function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "80vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
}

export default NotFoundPage;
