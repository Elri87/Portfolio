import React from "react";

const contactInfo = [
  {
    address: "Gordon's Bay, Cape Town 7140",
    phone: "+27 (0)82 253 6345",
    email: "info@elrilegrange.co.za",
    web: "www.elrilegrange.co.za",
  },
];
function Contact() {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 text-center">
        <h1 className="text-center font-bold text-4xl">
          Contact me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="text-center md:w2 md:text-center">
          <div>
            {contactInfo.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className="mt-12  text-center">
                    <p className="text-center text-2xl text-gray-500 rounded font-semibold">
                      {item.address}
                    </p>
                    <p className="px-8 py-8 text-center text-2xl text-gray-500 rounded font-semibold">
                      {item.phone}
                    </p>
                    <p className="text-center text-2xl text-gray-500 rounded font-semibold">
                      <a
                        href="https://www.elrilegrange.co.za/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.web}
                      </a>
                    </p>
                    <p className="text-center text-2xl text-gray-500 rounded font-semibold">
                      {item.email}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
