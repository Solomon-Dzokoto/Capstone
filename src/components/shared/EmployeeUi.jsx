import { Details } from "@/global/Icons";
import Button from "@components/ui/Button";
const EmployeeUi = () => {
  return (
    <main>
      <div className="">
        <div className="">
          <h2>Employees</h2>
          <Details />
          <Button variant="active">100</Button>
        </div>
      </div>
    </main>
  );
};

export default EmployeeUi;
