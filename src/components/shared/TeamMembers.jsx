import React from "react";

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="w-full rounded-none max-w-[496px] max-md:max-w-full mb-6">
      <div className="flex gap-1 justify-center items-center px-4 py-3 bg-white rounded-lg min-h-16">
        <div className="flex flex-1 shrink gap-3 items-start self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
          <img
            src={image}
            alt={name}
            className="object-contain shrink-0 w-8 aspect-square min-h-8 rounded-[200px]"
          />
          <div className="flex-1 shrink basis-0 min-w-60">
            <h3 className="font-medium text-slate-700">
              <span className="font-avenir font-black">{name}</span>
            </h3>
            {role && <p className="text-gray-500">{role}</p>}
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/329617be39ef4f628fbb3570cc8cdb15/cad233f38a7fc5dd68c3481577cda96ce2c754c7?placeholderIfAbsent=true"
        alt="Divider"
        className="object-contain z-10 w-full aspect-[250] max-md:mr-2 max-md:max-w-full"
      />
    </div>
  );
};

export default TeamMember;
