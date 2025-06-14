import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

export default function App() {
  const entries = data.map(function (entry) {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{entries}</main>
    </>
  );
}
