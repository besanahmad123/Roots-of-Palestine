import { useState } from "react";
import Card from "../components/Card";
import HebronImg from "../assets/images/الخليل.jpg";
import JerusalemImg from "../assets/images/القدس.jpg";
import GazaImg from "../assets/images/غزة.jpg";
import RamImg from "../assets/images/رام الله.jpg";
import BethlehemImg from "../assets/images/بيت لحم.jpg";
import NablusImg from "../assets/images/نابلس.jpg";
import JeninImg from "../assets/images/جنين.jpg";
import TulkarmImg from "../assets/images/طولكرم.jpg";
  
function Cities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

   const citiesData = [
    { name:"Jerusalem",
      Image: JerusalemImg,
      shortInfo:"هي واحدة من أقدم مدن العالم، ويعود تاريخها لآلاف السنين",
      fullInfo:"القدس هي واحدة من أقدم مدن العالم، ويعود تاريخها لآلاف السنين. تُعد من أهم المدن في العالم الإسلامي واليهودي والنصراني، وتُعتبر مركزاً للتراث والثقافة في المنطقة.",

    },
    { name:"Gaza",
       Image: GazaImg,
       shortInfo:"مدينة ساحلية على البحر المتوسط، معروفة بتاريخها القديم وصمود أهلها",
       fullInfo: "مدينة غزة هي مدينة ساحلية على البحر المتوسط، معروفة بتاريخها القديم وصمود أهلها في وجه التحديات. تشتهر بأسواقها التقليدية ومينائها الحيوي، وتعتبر مركزاً ثقافياً واقتصادياً هاماً في قطاع غزة.",
    },
    { name:"Ramallah",
      Image: RamImg,
      shortInfo:"مدينة حديثة نسبيًا، تُعد مركزًا إداريًا وثقافيًا.",
      fullInfo:"رام الله هي مدينة حديثة نسبيًا، تُعد مركزًا إداريًا وثقافيًا. تشتهر بتنوعها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    },
    { name:"Bethlehem",
      Image: BethlehemImg,
      shortInfo:"مشهور بمكانته الدينية كمسقط رأس يسوع المسيح.",
      fullInfo:"بيت لحم هي مدينة في فلسطين، مشهورة بمكانتها الدينية كمسقط رأس يسوع المسيح. تشتهر بتراثها القديس وثقافتها الغنية، وتُعد من أهم المدن في فلسطين.",
    },
    { name:"Nablus",
      Image: NablusImg,
      shortInfo:"معروفة بتاريخها العريق وصناعة الصابون التقليدي.",
      fullInfo:"نابلس هي مدينة في فلسطين، معروفة بتاريخها العريق وصناعة الصابون التقليدي. تشتهر بتراثها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    },
    { name:"Hebron",
      Image: HebronImg,
      shortInfo:"تشتهر بأسواقها القديمة ومكانتها الدينية.",
      fullInfo:"الخليل هي مدينة في فلسطين، تشتهر بأسواقها القديمة ومكانتها الدينية. تُعتبر من أهم المدن في فلسطين.",
    },
    { name:"Jenin",
      Image: JeninImg,
      shortInfo:"معروفة بمناظرها الطبيعية الخلابة وتاريخها الزراعي",
      fullInfo:"جنين هي مدينة في فلسطين، معروفة بمناظرها الطبيعية الخلابة وتاريخها الزراعي. تشتهر بتراثها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    },
    { name:"Tulkarm",
      Image: TulkarmImg,
      shortInfo:"تشتهر بحدائقها الجميلة وموقعها الاستراتيجي.",
      fullInfo:"طولكرم هي مدينة في فلسطين، تشتهر بحدائقها الجميلة وموقعها الاستراتيجي. تشتهر بتراثها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    } ];
    const filteredCities = citiesData.filter((city)=>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-2 border-b-2 border-gray-400 ">Cities Page</h2>
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="ابحث عن مدينة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {filteredCities.map((city, index) => (
          <div
           key={index} 
            onClick={() => 
              setSelectedCity(city.name===selectedCity ? "" : city.name)
              }
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-200 w-1/4 cursor-pointer "
              >
            <img src={city.Image}
             alt={city.name} 
             className="w-full h-40 object-cover rounded-lg mb-3" 
             />
            <h3 className="text-lg font-semibold mb-2">{city.name }</h3>
            <p className="text-gray-600">{city.shortInfo}</p>
            {selectedCity === city.name && (
              <p className="text-blue-700 mt-2">{city.fullInfo}</p>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}


export default Cities;