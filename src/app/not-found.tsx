import { Card, CardBody, Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="max-w-md mx-auto p-6">
        <CardBody>
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
            <p className="text-gray-600 mb-6">
              Sorry, something went wrong on our end.
            </p>
            <Link href="/" passHref>
              <Button className="bg-blue-500 text-white hover:bg-blue-600">
                Go Back Home
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default NotFound;
