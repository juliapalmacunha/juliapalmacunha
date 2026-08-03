export function ProjectDetails({ technologies, description }) {
  return (
    <div className="flex font-poppinsRegular flex-wrap gap-2">
      <div className="w-full">
        <p className="mb-[25px] mt-[20px] text-gray-300 leading-relaxed">
          {description}
        </p>
        <p className="py-3 font-semibold text-white">
          Tecnologias utilizadas:
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
           className="text-[#f5e6ff] text-xs lg:text-sm bg-[#c300ff]/15 border border-[#c300ff]/50 flex items-center justify-center px-4 py-1.5 rounded-lg shadow-[0_0_12px_rgba(195,0,255,0.15)] hover:bg-[#c300ff]/25 hover:border-[#d84dff] hover:shadow-[0_0_18px_rgba(195,0,255,0.3)] transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;