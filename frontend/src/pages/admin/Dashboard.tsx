import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user, role } = useAuth();
  return (
    <hgroup>
      <h1>
        Hi! {role} {user?.displayName}
      </h1>
      <p>This is your dashboard!</p>
    </hgroup>
  );
}
