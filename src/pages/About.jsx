import "../App.css";
import image from "../assets/gif/cuple4.jpg";
import image2 from "../assets/gif/cuple5.jpg";
import image1 from "../assets/gif/cuple3.jpg";
import image3 from "../assets/gif/cuple.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 gif-bg">
        <p className="moul-regular sm:text-9xl text-4xl text-yellow-400 pt-8 strok_white">
          សរីសួស្តីពិធីភ្ជាប់ពាក្យ
        </p>
        <div className="flex gap-10 items-center">
          <div className="flex flex-col items-center gap-8">
            <p className="preahvihear-regular text-yellow-500">កូនប្រុសនាម</p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              លឹម
            </p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              សុជានិត
            </p>
          </div>
          <p className="montecarlo-regular sm:text-9xl text-5xl text-white">
            SN
          </p>
          <div className="flex flex-col items-center gap-8">
            <p className="preahvihear-regular text-yellow-500">កូនស្រីនាម</p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              ទូច
            </p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              ណាក់
            </p>
          </div>
        </div>
        <p className="preahvihear-regular text-yellow-500">
          ដែលនឹងប្រព្រឹត្តិទៅនៅ
        </p>
        <p className="angkor-regular sm:text-9xl text-3xl text-white">
          ថ្ងៃទី ១២ ខែ ធ្នូ ឆ្នាំ ២០២៥
        </p>
        <p className="preahvihear-regular text-yellow-500">
          ចុះពីលើស្ពានអ្នកលឿងចំងាយ១គីឡូម៉ែត្រ
        </p>
        <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/%E1%9E%96%E1%9E%B6%E1%9E%98%E1%9E%9A%E1%9E%80%E1%9F%8D/@11.3188419,105.2731203,15z/data=!3m1!4b1!4m14!1m7!3m6!1s0x310bc31b853c03ef:0x1b340fdaa1ceee3f!2sLand+Nak+Loeung!8m2!3d11.2216803!4d105.2768101!16s%2Fg%2F11sdrbc9y0!3m5!1s0x310be9c4b4e97779:0x122ac01b4aca225d!8m2!3d11.3175509!4d105.2809247!16s%2Fg%2F11b6gczs88?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D"
            )
          }
        >
          <div
            className="border-1 border-yellow-600 rounded-full 0 cursor-pointer"
            id="button2"
          >
            <div className="font-thin text-yellow-300 sm:text-2xl py-1 px-2 ">
              បើកទីតាំង
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
          </div>
        </button>

        <p className="moul-regular sm:text-9xl text-4xl text-yellow-200 mt-26">
          សរីសួស្តីពិធីភ្ជាប់ពាក្យ
        </p>
        <div className="flex items-center gap-30">
          <div className="flex flex-col items-center gap-2">
            <p className="angkor-regular text-yellow-200">លោក តិច សុខលឹម</p>
            <p className="angkor-regular text-yellow-200">លោកស្រី គា សុគន្ធ</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="angkor-regular text-yellow-200">លោក លាប ទូច</p>
            <p className="angkor-regular text-yellow-200">លោកស្រី ចិន ឆន</p>
          </div>
        </div>
        <p className="preahvihear-regular text-yellow-500 text-center px-10">
          សម្តេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ្ញ៉ា លោកឧកញ្ញ៉ា លោកជំទាវ លោក លោកស្រី
          អ្នកនាងកញ្ញ៉ា អញ្ជើញចូលរួមជាអធិបតី និង
          ជាភ្ញៀវកិត្តយសដើម្បីប្រសឹទ្ធពរជ័យ សិរិសួស្តី ជ័យមង្កល
          ក្នុងពិធីភ្ជាប់ពាក្យ កូនប្រុស កូនស្រី របស់យើងខ្ញុំ
        </p>
        <div className="flex items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <p className="preahvihear-regular text-yellow-500">កូនប្រុសនាម</p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              លឹម
            </p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              សុជានិត
            </p>
          </div>
          <p className="montecarlo-regular sm:text-9xl text-5xl text-white">
            SN
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="preahvihear-regular text-yellow-500">កូនស្រីនាម</p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              ទូច
            </p>
            <p className="angkor-regular sm:text-9xl text-3xl text-white">
              ណាក់
            </p>
          </div>
        </div>
        <p className="preahvihear-regular text-yellow-500">
          ដែលនឹងប្រព្រឹត្តិ ទៅចាប់ពី ម៉ោង ៩​​ ព្រឹក
        </p>
        <p className="angkor-regular sm:text-9xl text-3xl text-white">
          ថ្ងៃសុក្រទី ១២ ខែ ធ្នូ ឆ្នាំ ២០២៥
        </p>
        <div
          className="border-1 border-yellow-600 rounded-full 0 cursor-pointer"
          id="button2"
        >
          <div
            className="preahvihear-regular font-thin text-yellow-300 sm:text-2xl py-1 px-2 "
            onClick={() =>
              window.open(
                "https://calendar.google.com/calendar/u/0/r/day/2025/12/12"
              )
            }
          >
            កក់ទុកក្នុងប្រតិទិន
            <FontAwesomeIcon icon={faCalendar} />{" "}
          </div>
        </div>
        <p className="moul-regular sm:text-9xl text-4xl text-yellow-200 mt-26">
          វិចិត្រសាល
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-40">
              <img src={image3} alt="bb" />{" "}
            </div>
            <div className="w-40">
              <img src={image1} alt="bb" />{" "}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-40">
              <img src={image2} alt="bb" />{" "}
            </div>
            <div className="w-40">
              <img src={image} alt="bb" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
