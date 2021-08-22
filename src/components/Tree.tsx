import { Folder as FolderType } from "../types";
import File from "./File";
import Folder from "./Folder";

function Tree({ data }: { data: FolderType }) {
  return (
    <main className="tree">
      {data.children &&
        data.children.map((elem) => {
          if ((elem as any).children) {
            return <Folder {...(elem as FolderType)} level={0} key={elem.id} />;
          }
          return <File {...elem} level={0} key={elem.id} />;
        })}
    </main>
  );
}

export default Tree;
