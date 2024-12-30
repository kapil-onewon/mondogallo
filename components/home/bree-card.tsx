import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface BreedCardProps {
  name: string;
  description: string;
  imageUrl: string;
  index: number;
}

export function BreedCard({
  name,
  description,
  imageUrl,
  index,
}: BreedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden rounded-xl">
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300" /> */}
          <div className="absolute group-hover:opacity-0 inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold mb-2 text-white mt-4 ml-6">{name}</h3>
          </div>
          {/* Hover Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-sm text-gray-200">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// interface BreedCardProps {
//   name: string;
//   description: string;
//   imageUrl: string;
// }

// export function BreedCard({ name, description, imageUrl }: BreedCardProps) {
//   return (
//     <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
//       <div className="relative aspect-square">
//         <Image
//           src={imageUrl}
//           alt={name}
//           fill
//           className="object-cover transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>
//       <CardContent className="p-6 text-center">
//         <h3 className="text-2xl font-semibold text-green-800 mb-3">{name}</h3>
//         <p className="text-gray-600 leading-relaxed">{description}</p>
//       </CardContent>
//     </Card>
//   );
// }
