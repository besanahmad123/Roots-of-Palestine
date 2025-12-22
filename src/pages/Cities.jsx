import { useState } from "react";
import Card from "../components/Card";  
function Cities() {
  const [searchTerm, setSearchTerm] = useState("");

   const citiesData = [
    { name:"القدس",
      Image:"image/image2.jpg",
      shortInfo:"هي واحدة من أقدم مدن العالم، ويعود تاريخها لآلاف السنين",
      fullInfo:"القدس هي واحدة من أقدم مدن العالم، ويعود تاريخها لآلاف السنين. تُعد من أهم المدن في العالم الإسلامي واليهودي والنصراني، وتُعتبر مركزاً للتراث والثقافة في المنطقة.",

    },
    { name:"غزة",
       Image:"image/image.jpg",
       shortInfo:"مدينة ساحلية على البحر المتوسط، معروفة بتاريخها القديم وصمود أهلها",
       fullInfo: "مدينة غزة هي مدينة ساحلية على البحر المتوسط، معروفة بتاريخها القديم وصمود أهلها في وجه التحديات. تشتهر بأسواقها التقليدية ومينائها الحيوي، وتعتبر مركزاً ثقافياً واقتصادياً هاماً في قطاع غزة.",
    },
    { name:"رام الله",
      Image:"image/R.jpg",
      shortInfo:"مدينة حديثة نسبيًا، تُعد مركزًا إداريًا وثقافيًا.",
      fullInfo:"رام الله هي مدينة حديثة نسبيًا، تُعد مركزًا إداريًا وثقافيًا. تشتهر بتنوعها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    },
    { name:"بيت لحم",
      Image:"image/image3.jpg",
      shortInfo:"مشهور بمكانته الدينية كمسقط رأس يسوع المسيح.",
      fullInfo:"بيت لحم هي مدينة في فلسطين، مشهورة بمكانتها الدينية كمسقط رأس يسوع المسيح. تشتهر بتراثها القديس وثقافتها الغنية، وتُعد من أهم المدن في فلسطين.",
    },
    { name:"نابلس",
      Image:"image/image4.jpg",
      shortInfo:"معروفة بتاريخها العريق وصناعة الصابون التقليدي.",
      fullInfo:"نابلس هي مدينة في فلسطين، معروفة بتاريخها العريق وصناعة الصابون التقليدي. تشتهر بتراثها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    },
    { name:"الخليل",
      Image:"image/image5.jpg",
      shortInfo:"تشتهر بأسواقها القديمة ومكانتها الدينية.",
      fullInfo:"الخليل هي مدينة في فلسطين، تشتهر بأسواقها القديمة ومكانتها الدينية. تُعتبر من أهم المدن في فلسطين.",
    },
    { name:"جنين",
      Image:"image/image6.jpg",
      shortInfo:"معروفة بمناظرها الطبيعية الخلابة وتاريخها الزراعي",
      fullInfo:"جنين هي مدينة في فلسطين، معروفة بمناظرها الطبيعية الخلابة وتاريخها الزراعي. تشتهر بتراثها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    },
    { name:"طولكرم",
      Image:"image/image7.jpg",
      shortInfo:"تشتهر بحدائقها الجميلة وموقعها الاستراتيجي.",
      fullInfo:"طولكرم هي مدينة في فلسطين، تشتهر بحدائقها الجميلة وموقعها الاستراتيجي. تشتهر بتراثها الثقافي والتراثي، وتُعتبر من أهم المدن في فلسطين.",
    } ];
    const filteredCities = citiesData.filter(city =>
      city.name.includes(searchTerm)
    );
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-2 border-b-2 border-gray-400 pd-2">Cities Page</h2>
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
          <div key={index} 
          className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:bg-gray-200 w-60 cursor-pointer ">
            <h3 className="text-lg font-semibold">{city.name}</h3>
            onClick={() => setSelectedCity(city.name===selectedCity ? "" : city.name)}
            <img src={city.Image} alt={city.name} className="w-full h-40 object-cover rounded-lg mb-3" />
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
