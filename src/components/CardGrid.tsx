import React from "react";
import { Card } from "./Card";


type TextHoverPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center"
  | "center";

const services: {
  title: string;
  description: string;
  size: { width: number; height: number };
  textHoverPosition?: TextHoverPosition;
}[] = [
    {
        title: 'Mobile, Web App Development & Game',
        description: 'Empowering your ideas into seamless mobile and web applications. Delivering intuitive, fast, and scalable apps for every platform.',
        size:{width:688, height:368},
        textHoverPosition:"top-left"

    },
    {
        title: 'Data Analytics',
        description: 'Turning raw data into meaningful business insights. Drive smarter decisions with powerful analytics and reporting tools.',
        size:{width:593, height:368},
        textHoverPosition:"top-left"
    },
    {
        title: 'Testing & Quality Assurance',
        description: 'Delivering perfection through rigorous, detailed testing. We ensure your products are bug-free, reliable, and market-ready.',
        size:{width:670, height:368},
        textHoverPosition:"top-center"
    },
    {
        title: 'UX/UI Design',
        description: 'Designing beautiful experiences that users love and remember. Our design-first approach drives engagement and loyalty.',
        size:{width:600, height:368},
        textHoverPosition:"top-left"
    },
    {
        title: 'Cloud Solutions',
        description: 'Scale faster and smarter with modern cloud technologies. We help you migrate, optimize, and manage cloud infrastructure.',
        size:{width:640, height:400},
        textHoverPosition:"top-left"
    },
    {
       title: 'AI & Automation',
        description: 'Automate your processes and supercharge innovation with AI. We create intelligent solutions that think, learn, and act.',
        size:{width:670, height:400},
        textHoverPosition:"top-center"
    }
];

export const CardGrid: React.FC = () => (
  <div className="min-h-screen flex items-center">
    <div
      className="grid grid-cols-2 gap-[26px] justify-items-center mx-auto"
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        gridTemplateColumns: "repeat(2, max-content)"
      }}
    >
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          size={service.size}
          textHoverPosition={service.textHoverPosition}
        />
      ))}
      {/* <Card
        title="Card I"
        description="Description for Card I"
        size={{ width: 988, height: 468 }}
        textHoverPosition="top-left"
        overlays={["/path/to/image1.png"]}
      />
      <Card
        title="Card II"
        description="Description for Card II"
        size={{ width: 693, height: 468 }}
        textHoverPosition="top-left"
        overlays={["/path/to/image2.png"]}
      />
      <Card
        title="Card III"
        description="Description for Card III"
        size={{ width: 850, height: 468 }}
        textHoverPosition="top-center"
        overlays={["/path/to/image3.png"]}
      />
      <Card
        title="Card IV"
        description="Description for Card IV"
        size={{ width: 833, height: 468 }}
        textHoverPosition="top-left"
        overlays={["/path/to/image4.png"]}
      />
      <Card
        title="Card V"
        description="Description for Card V"
        size={{ width: 795, height: 588 }}
        textHoverPosition="top-left"
        overlays={["/path/to/image5.png"]}
      />
      <Card
        title="Card VI"
        description="Description for Card VI"
        size={{ width: 888, height: 588 }}
        textHoverPosition="top-center"
        overlays={["/path/to/image6.png"]}
      /> */}
    </div>
  </div>
);
