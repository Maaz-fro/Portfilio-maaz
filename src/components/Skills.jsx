import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//export default function Skills(){

 
// Skills data
const skills = [
  { name: "html", img: "public/skills/html.png" },
  { name: "CSS", img: "public/skills/css.png" },
  { name: "BOOTSTRAP", img: "public/skills/bootstrap.png" },
  { name: "TAILWIND", img: "public/skills/tailwind.png" },
  { name: "GIT", img: "public/skills/git.png" },
  { name: "FIGMA", img: "public/skills/figma.png" },
  { name: "ADOBE PHOTOSHOP", img: "public/skills/photoshop.png" },
  { name: "REACTJS", img: "public/skills/reactjs.png" },
  { name: "ANGULAR", img: "public/skills/angularjs.png" },
  { name: "PHP", img: "public/skills/php.png" },
  { name: "LARAVEL", img: "public/skills/laravel.png" },
  { name: "CANVA", img: "public/skills/canva.png" },
  { name: "ADOBE INDESIGN", img: "public/skills/indesign.png" },
  { name: "MYSQL", img: "public/skills/mysql.png" },
  { name: "WORD", img: "public/skills/word.png" },
  { name: "JAVASCRIPT", img: "public/skills/js.png" },
  { name: "EXCEL", img: "public/skills/excel.png" },
  { name: "WORDPRESS", img: "public/skills/wordpress.png" },
  { name: "VUE JS", img: "public/skills/vuejs.png" },
  { name: "OPENCART", img: "public/skills/opencart.png" },
  { name: "ADOBE ILLUSTRATION", img: "public/skills/illustration.png" },
  { name: "POWER POINT", img: "public/skills/ppt.png" },
  







  

];

export default function Skills() {


  return (

    
    <div id="skills" className="bg-yellow-700 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mt-10 mb-10">My Skills</h2>
      <h1>maaz</h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center border-5 border-yellow-600 bg-yellow-950 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-15 mb-4"
              />
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       
    </div>
  );
}
