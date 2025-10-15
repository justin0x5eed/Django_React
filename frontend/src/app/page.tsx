import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-10">
      <Card className="w-[300px] shadow-lg">
        <CardHeader className="text-lg font-semibold">HeroUI 测试</CardHeader>
        <CardBody>
          <p>HeroUI 已经配置成功 ✅</p>
          <Button color="primary" className="mt-4">
            点我
          </Button>
        </CardBody>
      </Card>
    </main>
  );
}
