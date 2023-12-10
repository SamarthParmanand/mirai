'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "@/components/Image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { urlForImage } from "@sanity/lib/image";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut } from 'lucide-react';

const Controls = () => {
  const { zoomIn, zoomOut } = useControls();
  return (
    <div className="text-black fixed top-[85%] lg:top-[88%] z-100 p-1 ">
      <button className="p-1 bg-white/50 rounded-lg mx-3" onClick={() => zoomIn()}><ZoomIn /></button>
      <button className="p-1 bg-white/50 rounded-lg mx-3" onClick={() => zoomOut()}><ZoomOut /></button>
    </div>
  );
};

const ImageWithDialog = ({ img, index }) => (
    <Dialog>
      <DialogTrigger>
        <Image img={img} alt={`Project Showcase Image ${index}`} />
      </DialogTrigger>
      <DialogContent className="h-[85vh] lg:h-[90vh] w-[95vw] lg:w-[max-content] backdrop-blur-3xl bg-black/75 flex flex-col justify-center p-2 border-2 border-white/50 items-center">
        <TransformWrapper>
          <TransformComponent>
            <img
              src={`${urlForImage(img).url()}`}
              className="h-full object-contain lg:object-cover self-center"
            />
          </TransformComponent>
          <Controls />
        </TransformWrapper>
        <DialogClose className="bg-black rounded-lg h-14 text-white fixed bottom-0 self-center w-[10vw]">
          Close
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
  
export default ImageWithDialog;
