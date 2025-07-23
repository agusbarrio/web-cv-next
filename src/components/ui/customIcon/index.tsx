import React from "react";
import Image, { getImageProps, ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import SiIcon, { SiIconProps } from "../siIcon";
import LucideIcon, { LucideIconProps } from "../lucideIcon";

export default function CustomIcon({
  simpleIconProps,
  lucideIconProps,
  imageProps,
}: {
  simpleIconProps?: SiIconProps;
  lucideIconProps?: LucideIconProps;
  imageProps?: ImageProps;
}) {
  if (simpleIconProps) {
    return <SiIcon {...simpleIconProps} />;
  } else if (lucideIconProps) {
    return <LucideIcon {...lucideIconProps} />;
  } else if (imageProps) {
    return (
      <Image
        {...imageProps}
        width={imageProps.width || 24}
        height={imageProps.height || 24}
        alt={imageProps.alt || ""}
        className={cn("object-cover", imageProps.className)}
      />
    );
  }

  return <></>;
}
