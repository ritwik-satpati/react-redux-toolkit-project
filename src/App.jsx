import Header from "./components/Header.jsx";
import UserDetails from "./components/UserDetails.jsx";

export default function App() {
  return (
    <div className="min-h-[100vh] w-full flex justify-center">
      <div className="w-[500px] space-y-3 px-2 py-3">
        <Header />
        <UserDetails />
      </div>
    </div>
  );
}
