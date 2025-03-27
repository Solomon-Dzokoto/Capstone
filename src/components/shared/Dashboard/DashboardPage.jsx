import Button from "@components/ui/Button";
import DashboardSideComp from "./DashboardSideComp";
import Inbox from "./Inbox";
import Table from "@components/ui/Table";
const DashboardPage = () => {
  return (
    <main>
      <div className="">
        <h1>Hello Omah</h1>
        <p className="text-sm text-subText ">Lets be productive today </p>
      </div>
      <section className="flex ">
        <div className="">
          <article className="max-w-[46rem] border border-border pr-5 w-auto p-4 rounded-md flex gap-6">
            <div className="size-14 rounded-full  bg-[#EEF5FF] " />
            <div className="">
              <h3 className="text-lg w-[23.5rem]  ">
                Keep in sync with your accounting system
              </h3>
              <p className="text-sm w-[23.5rem] text-subText">
                Now! you can customize your journal voucher the way you want and
                get it ready to import to your accounting system
              </p>
            </div>
            <Button className="h-fit py-3 whitespace-nowrap px-4">
              Let's get started
            </Button>
          </article>
          <Inbox />
          <Table />
        </div>
        <div className="">
          <DashboardSideComp />
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
