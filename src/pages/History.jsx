import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export function HistoryTimeline() {
  const history = [
    { year: "2014", event: "Fundación de Clínica JADE con una sola sede" },
    { year: "2016", event: "Expansión a segunda ubicación" },
    { year: "2018", event: "Obtención de certificación en medicina estética" },
    { year: "2020", event: "Tercera sede inaugurada" },
    { year: "2022", event: "Cuarta ubicación estratégica" },
    { year: "2024", event: "Líderes en oftalmología estética de la región" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Timeline>
        {history.map((item, index) => (
          <TimelineItem key={index}>
            {/* Conector excepto en el último */}
            {index !== history.length - 1 && (
              <TimelineConnector className="bg-[#359ede]" />
            )}

            <TimelineHeader>
              <TimelineIcon className="bg-[#359ede] text-white p-2 shadow-md">
                <CalendarDaysIcon className="h-4 w-4" />
              </TimelineIcon>

              <Typography
                variant="h5"
                className="text-[#359ede] font-bold tracking-wide"
              >
                {item.year}
              </Typography>
            </TimelineHeader>

            <TimelineBody className="pb-8">
              <Typography className="text-gray-700 text-lg leading-relaxed">
                {item.event}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
