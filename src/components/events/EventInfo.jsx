import React from "react";
import Facilitators from "./Facilitators";

const EventInfo = () => {
  return (
    <div className="bg-gray-100 -mb-10">
      <div className="bg-gray-100 pt-12">
        <div className="w-[90vw] flex justify-center items-center bg-white mt-20 border shadow-lg p-5 rounded-lg ml-12 my-10">
          <div className="grid grid-cols-2">
            <div>
              <img src="https://files.utsav.yoga/image/2023-11-22/Music_jam_min1700638347671.png" />
            </div>
            <div className="border ml-3 pl-2">
             <div className="flex mt-2">
                <div className="font-semibold">Category :</div>
                <div className="ml-2"> Yoga</div>
             </div>
             <div className="flex mt-2">
                <div className="font-semibold">Category :</div>
                <div className="ml-2"> Yoga</div>
             </div>
             <div className="flex mt-2">
                <div className="font-semibold">Category :</div>
                <div className="ml-2"> Yoga</div>
             </div>
             <div className="flex mt-2">
                <div className="font-semibold">Category :</div>
                <div className="ml-2"> Yoga</div>
             </div>
             <div className="flex mt-2">
                <div className="font-semibold">Category :</div>
                <div className="ml-2"> Yoga</div>
             </div>
             <div className="flex mt-2">
                <div className="font-semibold">Category :</div>
                <div className="ml-2"> Yoga</div>
             </div>
            </div>
          </div>
        </div>
        <div className="w-[90vw] flex justify-center items-center bg-white mt-12 border shadow-lg p-5 rounded-lg ml-12 my-10">
          <div className="">
            <h1 className="text-2xl font-semibold ">About</h1>
            <p className="py-2 text-lg">
              Join us for an adorable and soul-soothing experience at the Puppy
              Yoga Workshop, hosted in collaboration with Paws & Poses, taking
              place at Utsav Yoga on the 3rd of September! Prepare to embark on
              a journey of ultimate bliss and serenity as you combine the
              benefits of yoga with the purest joy of cuddly, four-legged
              companions. To ensure you have the flexibility to choose the best
              timing for your schedule, we have thoughtfully arranged three
              different slots throughout the day. The morning slot is available
              from 11:30 AM to 12:30 AM, followed by the afternoon slot from
              1:00 PM to 2:00 PM. Our Puppy Yoga Workshop is a one-of-a-kind
              event that brings together the healing power of yoga and the
              unconditional love of puppies.
            </p>
            <p className="py-2 text-lg">
              Experience the magic of the human-animal connection as you share
              moments of affection, playfulness, and relaxation with the
              puppies. Studies have shown that spending time with animals can
              reduce stress and promote a sense of well-being. Skilled yoga
              instructors will lead the session, ensuring that everyone,
              including the puppies, feels comfortable and at ease throughout
              the practice. They will guide you through a rejuvenating yoga
              session suitable for all levels of experience.
            </p>
            <p className="py-2 text-lg">
              We're thrilled to partner with Paws & Poses, who are committed to
              giving back to the community and making a positive impact on
              animal welfare. As part of their dedication, they donate 5% of
              ticketing proceeds to an esteemed animal welfare organization and
              help promote puppies available for adoption. Some of these
              adorable pups will be joining our yoga session, adding an extra
              touch of love. By attending this workshop, you'll not only treat
              yourself to a unique experience but also contribute to a greater
              cause of giving these furry friends a better life.
            </p>
          </div>
        </div>
        <div className="mb-10">
            <h1 className="ml-20 text-3xl font-semibold">Facilitators</h1>
        <Facilitators/>
      </div>
      </div>
    </div>
  );
};

export default EventInfo;
