import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Warehouse } from "lucide-react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="flex justify-center">
          <Warehouse />
          <p className="font-bold text-inherit px-4">Login</p>
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
