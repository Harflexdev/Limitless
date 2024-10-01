import Hero from "@/components/Hero";
import Nav from "./Nav/page";
import Box from "@/components/Box";
import { AnimatedListDemo } from "./sample/Animated";
import SparklesText from "@/components/ui/sparkles-text";
import Meeting from "@/components/Meeting";
import Prep from "@/components/Prep";
import Prepp from "@/components/Prepp";
import Preppp from "@/components/Preppp";
import Presp from "@/components/Presp";
import Boxx from "@/components/Boxx";
import Pod from "@/components/Pod";
import Podd from "@/components/Podd";
import Faq from "@/components/Faq";
import Video from "@/components/Video";
import Getstarted from "@/components/Getstarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <div>
    <Nav/>
    <Hero/>
   <div className="mt-40">
   <Box />
   <div/>
    <AnimatedListDemo className="mt-9"/>
   </div>
   <div className="mt-9 text-center">
    <SparklesText text="A
web
app,
Mac
app,
Windows
app,
and
a
wearable
to
power
your
personalized
AI." className="text-2xl text-gray-400"/>
   </div>
   
   <div className="mt-20">
    <hr />
    <Meeting/>
   </div>
   <div className="mt-9">
    <Prep/>
   </div>
   <div className="mt-9">
    <Prepp/>
   </div>
   <div className="mt-9">
    <Preppp/>
   </div>
   <div className="mt-9">
    <Presp/>
   </div>
   <div className="mt-14">
    <Boxx/>
   </div>
   <div>
    <Pod/>
   </div>
   <div>
    <Podd/>
    
   </div>
   <div>
    <Video/>
   </div>
   <div className="mt-9">
    <Faq/>
   </div>
   <div className="mt-28">
    <Getstarted/>
   </div>
   <div className="mt-6">
    <Footer/>
   </div>
   </div>
  );
}
