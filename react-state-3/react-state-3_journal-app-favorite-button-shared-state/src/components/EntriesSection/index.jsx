import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

export default function EntriesSection({ entries, onToggleFavorite }) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>{entries.length}</Badge>
        </Tab>
        <Tab>
          Favorites{" "}
          <Badge>{entries.filter((entry) => entry.isFavorite).length}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              id={entry.id}
              isFavorite={entry.isFavorite}
              onToggleFavorite={onToggleFavorite}
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
