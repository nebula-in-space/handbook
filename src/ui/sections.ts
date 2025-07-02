/* Icons */
import chemistry from "@assets/images/tab-icons/chemistry.svg";
import medicine from "@assets/images/tab-icons/medicine.svg";
//import plumbing from "@assets/images/tab-icons/plumbing.svg";
//import grenade from "@assets/images/tab-icons/grenade.svg";
import genetics from "@assets/images/tab-icons/genetics.svg";
//import virus from "@assets/images/tab-icons/virus.svg";
//import surgery from "@assets/images/tab-icons/surgery.svg";
import trauma from "@assets/images/tab-icons/trauma.svg";
//import wound from "@assets/images/tab-icons/wound.svg";
//import ghetto from "@assets/images/tab-icons/ghetto.svg";
//import construction from "@assets/images/tab-icons/construction.svg";
//import machines from "@assets/images/tab-icons/machines.svg";
//import power from "@assets/images/tab-icons/power.svg";
//import solar from "@assets/images/tab-icons/solar.svg";
//import supermatter from "@assets/images/tab-icons/supermatter.svg";
import turbine from "@assets/images/tab-icons/turbine.svg";
//import atmos from "@assets/images/tab-icons/atmos.svg";
//import tcomm from "@assets/images/tab-icons/tcomm.svg";
import rnd from "@assets/images/tab-icons/rnd.svg";
//import toxins from "@assets/images/tab-icons/toxins.svg";
//import xeno from "@assets/images/tab-icons/xeno.svg";
import rules from "@assets/images/tab-icons/rules.svg";
//import aimod from "@assets/images/tab-icons/aimod.svg";
//import critter from "@assets/images/tab-icons/critter.svg";
import races from "@assets/images/tab-icons/races.svg";
import food from "@assets/images/tab-icons/food.svg";
//import hydro from "@assets/images/tab-icons/hydro.svg";
//import song from "@assets/images/tab-icons/song.svg";
//import crate from "@assets/images/tab-icons/crate.svg";
//import space from "@assets/images/tab-icons/space.svg";
//import aux from "@assets/images/tab-icons/auxbase.svg";
import robo from "@assets/images/tab-icons/robo.svg";
//import security from "@assets/images/tab-icons/security.svg";
//import law from "@assets/images/tab-icons/law.svg";
import sop from "@assets/images/tab-icons/sop.svg";
//import trial from "@assets/images/tab-icons/trial.svg";
//import traitor from "@assets/images/tab-icons/traitor.svg";
//import hacking from "@assets/images/tab-icons/hacking.svg";
//import weapons from "@assets/images/tab-icons/weapons.svg";
//import uplink from "@assets/images/tab-icons/uplink.svg";
//import rev from "@assets/images/tab-icons/rev.svg";
//import cult from "@assets/images/tab-icons/cult.svg";
//import nuke from "@assets/images/tab-icons/nuke.svg";
//import malf from "@assets/images/tab-icons/malf.svg";
import combat from "@assets/images/tab-icons/combat.svg";
//import access from "@assets/images/tab-icons/access.svg";
//import xmorph from "@assets/images/tab-icons/xmorph.svg";
//import abduction from "@assets/images/tab-icons/abduction.svg";
//import cyto from "@assets/images/tab-icons/cyto.svg";
//import circuits from "@assets/images/tab-icons/circuit.svg";
//import tourist from "@assets/images/tab-icons/tourist.svg";
import drink from "@assets/images/tab-icons/drink.svg";
import arsenal from "@assets/images/tab-icons/arsenal.svg";
import armor from "@assets/images/tab-icons/armor.svg";

export interface SectionInfo {
  name: string;
  tabs: TabInfo[];
}

export interface TabInfo {
  page: string;
  icon: string | null;
  text?: string;
}

export const META = "$META";

const sections: SectionInfo[] = [
  {
    name: "Медицина",
    tabs: [
      { page: "Guide_to_medicine", text: "Медицина", icon: medicine },
      { page: "Guide_to_chemistry", text: "Химия", icon: chemistry },
      //{ page: "Guide_to_Ghetto_Chemistry", text: "Гетто", icon: ghetto, data: Guide_to_Ghetto_Chemistry},
      //{ page: "Guide_to_plumbing", text: "Пламбинг", icon: plumbing, data: Guide_to_plumbing },
      //{ page: "Grenade", text: "Гранаты", icon: grenade, data: Grenade },
      //{ page: "Surgery", text: "Хирургия", icon: surgery },
      { page: "Guide_to_Traumas", text: "Церебралки", icon: trauma },
    ],
  },
/*
  {
    name: "Инженерия",
    tabs: [
      { page: "Guide_to_construction", text: "Строительство", icon: construction, data: Guide_to_construction},
      { page: "Machines", text: "Машины", icon: machines, data: Machines },
      { page: "Guide_to_power", text: "Энергия", icon: power, data: Guide_to_power},
      { page: "Solars", text: "Панели", icon: solar, data: Solars },
      { page: "Guide_to_the_Supermatter", text: "Материя", icon: supermatter, data: Guide_to_the_Supermatter },
      { page: "Gas_turbine", text: "Турбина", icon: turbine, data: Gas_turbine },
      { page: "Guide_to_Atmospherics", text: "Атмос", icon: atmos, data: Guide_to_Atmospherics },
      { page: "Guide_to_disposals", text: "Трубы", icon: null, data: Guide_to_disposals }, // TODO: add icon data: Guide_to_disposals
      { page: "Guide_to_Telecommunications", text: "Телекомы", icon: tcomm, data: Guide_to_Telecommunications },
    ],
  },
*/
/*
  {
    name: "Наука",
    tabs: [
      { page: "Guide_to_toxins", text: "Токсиы", icon: toxins, data: Guide_to_toxins},
      { page: "Guide_to_xenobiology", text: "Ксено", icon: xeno, data: Guide_to_xenobiology},
      { page: "Guide_to_Nanites", text: "nanite", icon: nanites },
    ],
  },
*/
  {
    name: "Исследование",
    tabs: [
      { page: "Guide_to_Research_and_Development", text: "R&D", icon: rnd},
      { page: "Guide_to_robotics", text: "Роботика", icon: robo },
      //{ page: "AI_modules", text: "Модули ИИ", icon: aimod, data: AI_modules },
      { page: "Guide_to_genetics", text: "Генетика", icon: genetics },
      { page: "Gas_turbine", text: "Турбина", icon: turbine },
      { page: "Guide_to_food", text: "Еда", icon: food },
      { page: "Guide_to_drinks", text: "Напитки", icon: drink }
      //{ page: "Guide_to_hydroponics", text: "Гидропоника", icon: hydro, data: Guide_to_hydroponics },
      //{ page: "Supply_crates", text: "Карго Ящики", icon: crate, data: Supply_crates },
    ],
  },
  //{
  //  name: "Охрана",
  //  tabs: [
  //    { page: "Guide_to_security", text: "Охрана", icon: security, data: Guide_to_security},
  //    { page: "Space_Law", text: "Законы", icon: law, data: Space_Law },
  //    { page: "Standard_Operating_Procedure", text: "С.О.П.", icon: sop, data: Standard_Operating_Procedure},
  //    { page: "Guide_to_trials", text: "Суды", icon: trial, data: Guide_to_trials},
  //  ],
  //},
  {
    name: "Разное",
    tabs: [
      { page: "Rules", text: "Правила", icon: rules },
      //{ page: "Hacking", text: "Взлом", icon: hacking, data: Hacking },
      //{ page: "Critters", text: "Существа", icon: critter, data: Critters },
      { page: "Guide_to_races", text: "Расы", icon: races },
      //{ page: "Paper_Markdown", text: "Документы", icon: law, data: Paper_Markdown },
      //{ page: "Songs", text: "Музыка", icon: song, data: Songs },
      //{ page: "Guide_to_Space_Exploration", text: "Иследование", icon: space, data: Guide_to_Space_Exploration},
      //{ page: "Makeshift_weapons", text: "Самоделки", icon: weapons, data: Makeshift_weapons },
      //{ page: "Syndicate_Items", text: "Аплинк", icon: uplink, data: Syndicate_Items},
      //{ page: "Illicit_Access", text: "Проникновение", icon: access, data: Illicit_Access },
      { page: "Arsenal", text: "Арсенал", icon: arsenal },
      { page: "Mood", text: "Настроение", icon: null },
    ],
  },
  {
    name: "Bonus",
    tabs: [
      { page: "Golosary", text: "Голосарий", icon: sop },
      { page: "Guide_to_Combat", text: "Боевка", icon: combat },
      { page: "Armor", text: "Броня", icon: armor },
    ],
  },
  {
    name: META,
    tabs: [
      { page: "$Welcome", text: "На главную", icon: null },
    ],
  },
];

export default sections;
