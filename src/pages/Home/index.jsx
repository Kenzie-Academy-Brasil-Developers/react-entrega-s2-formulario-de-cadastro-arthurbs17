import { useParams } from "react-router";

const Home = () => {
  const params = useParams();
  return (
    <div>
      <p>Bem vindo, {params.name}</p>
    </div>
  );
};

export default Home;
