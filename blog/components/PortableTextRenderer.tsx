
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

type Column = {
  _key?: string;
  widthPercent?: number;
  content?: unknown[];
};

type ColumnLayout = {
  _type: "columnLayout";
  _key: string;
  columns?: Column[];
  gap?: number;
};

type ImageBlock = {
  _type: "image";
  asset?: { _ref?: string; _id?: string };
  alt?: string;
  height?: number;
  fit?: "cover" | "contain";
};

function ColumnLayoutRenderer({ value }: { value: ColumnLayout }) {
  const columns = value.columns ?? [];

  const gridTemplateColumns = columns
    .map((column) => `minmax(0, ${column.widthPercent ?? 100}fr)`)
    .join(" ");

  return (
    <div
        className="my-8 grid grid-cols-1 items-start md:grid"
        style={{
            gridTemplateColumns: columns
            .map((column) => `${column.widthPercent ?? 100}fr`)
            .join(" "),
            gap: "12px",
        }}
        >
      {columns.map((column, index) => (
        <div key={column._key ?? index} className="min-w-0">
          {column.content && (
            <PortableText
              value={column.content as never[]}
              components={components}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ImageRenderer({ value }: { value: ImageBlock }) {
  if (!value.asset) return null;

  const imageUrl = builder.image(value as never).auto("format").url();
  const fit = value.fit ?? "cover";
  const height = value.height ?? 320;

  return (
    <img
      src={imageUrl}
      alt={value.alt ?? ""}
      className="block w-full rounded-xl"
      style={{
        height: `${height}px`,
        objectFit: fit,
        objectPosition: "center",
      }}
    />
  );
}


const components = {
  types: {
    columnLayout: ColumnLayoutRenderer,
    image: ImageRenderer,
  },
};

export default function PortableTextRenderer({
  value,
}: {
  value: unknown[];
}) {
  return (
    <PortableText
      value={value as never[]}
      components={components}
    />
  );
}
