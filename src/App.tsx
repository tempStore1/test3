import { ts } from "@/components/test";
import { ApiService } from "@/utils/ApiService";
import { useState, useEffect } from "react";
const App: React.FC = () => {
  const [resource, serResource] = useState({});

  const getRandomData = () => {
    return ApiService.get("https://api.waifu.im/random");
  };

  useEffect(() => {
    getRandomData().then((res: any) => {
      serResource(res);
    });
  }, []);

  useEffect(() => {
    console.log("resource", resource);
  }, [resource]);

  return (
    <div className="starterkit-container starterkit-text-center">
      Hello World
    </div>
  );
};

ts();

export default App;
