export default function App() {
  return (
    <>
      <header className = "header">
        <div className = "container">
          <p className = "tagline">Catalogo</p>
          <h1 className="title">Catalogo Whatsapp</h1>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="card section">
            <p className="muted">
              Base visual lista. Proximo paso: router + paginas.
            </p>

            <div className="actions"> 
              <button className="btn">Boton</button>
              <button className="btn btn-primary">Accion</button>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <small className="muted">
            © {new Date().getFullYear()} Negocio familiar
          </small>
        </div>
      </footer>
    </>
  );
}