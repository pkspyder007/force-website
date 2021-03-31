import Image from "next/image";

export default function MemberCard({
  // img = "/images/dp.jpeg",
  img = "/images/desk.jpg",
  name = "John Doe",
  position = "Executive Member",
}) {
  return (
    <div>
      <div class=" flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg ">
        <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
          <Image
            src={img}
            alt={name}
            height="400"
            width="400"
            class="h-full w-full"
          />
        </div>

        <h2 class="mt-4 font-bold text-xl">{name}</h2>
        {/* <h6 class="mt-2 text-sm font-medium">{position}</h6> */}

        <p class="text-sm font-medium text-gray-500 text-center mt-3">
          {position}
        </p>

        {/* <ul class="flex flex-row mt-4 space-x-2">
          <li>
            <a
              href=""
              class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href=""
              class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href=""
              class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
