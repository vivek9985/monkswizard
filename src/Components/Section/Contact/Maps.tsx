/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Heading from "@/Components/Utils/Heading/Heading";
import Paragraph from "@/Components/Utils/Paragraph/Paragraph";
import GoogleMapReact from "google-map-react";

const MapMarker = ({ text }: any) => <div>{text}</div>;

export default function Maps() {
    const defaultProps = {
        center: {
            lat: 23.822336,
            lng: 90.423296,
        },
        zoom: 12,
    };

    return (
        <section>
            <div className="max-w-[482px] pt-20 pb-16 mx-auto">
                <Heading variant="h2" className="text-center">Contact Information</Heading>
                <Paragraph variant="para-11" className="text-center text-neutral-500 mt-3"> If the map is accompanied by contact details such as the agency&apos;s address, phone number, and email address.</Paragraph>
            </div>
            <div className="w-full h-[600px]">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDFdadqDbt-vScG6IhGrvgN03lonUPw4VA" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <MapMarker text="My Marker" />
                </GoogleMapReact>
            </div>
        </section>
    );
}