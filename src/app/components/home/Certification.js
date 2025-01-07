import React from "react";
import Image from "next/image";
import {
	ACFE,
	Blockchain,
	Cali,
	Fali,
	Trace,
	Wad,
} from "../../../../public/page";
import { PageLayout } from "@/app/layout/pageLayout";

function Certification() {
	return (
		<div className="py-20">
			
		</div>
	);
}

export default Certification;

function ListCert({ item }) {
	return <Image data-aos="fade-up" src={item} alt="" />;
}

const listCert = [Blockchain, ACFE, Cali, Wad, Fali, Trace];
