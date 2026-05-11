import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Logout() {
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("Bye bye!");
    });
  };

  return <button onClick={handleLogout}>Sign out</button>;
}
