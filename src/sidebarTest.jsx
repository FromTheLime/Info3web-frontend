import Sidebar from "./components/Sidebar.jsx";
import Post from "./components/Post.jsx"

export default function SidebarTest() {
  return (
    <div className="flex bg-body">
      <Sidebar />
      <main className="pl-64 p-10">
        <h1 className="text-2xl font-bold mb-4">Conteúdo ao lado da Sidebar</h1>
        <p>Testando layout com fundo</p>
        <Post />
        <p className="py-200">Testando Sidebar fixa</p>
      </main>
    </div>
  );
}
