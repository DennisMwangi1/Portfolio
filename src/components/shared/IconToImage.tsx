import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
type Item = {
    Icon: React.ComponentType<{ size?: number; color?: string }>;
};

export default function iconToImage(Icon: Item["Icon"], size = 64): Promise<HTMLImageElement> {
    const svg = renderToStaticMarkup(
        <Icon size={size} />
    );

    const svgBlob = new Blob(
        [`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">${svg}</svg>`],
        { type: "image/svg+xml;charset=utf-8" }
    );

    const url = URL.createObjectURL(svgBlob);

    return new Promise(resolve => {
        const img = new Image();
        img.onload = () => {
            URL.revokeObjectURL(url);
            resolve(img);
        };
        img.src = url;
    });
}
