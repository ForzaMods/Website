"use client";

export default function Issue({ data }: { data: { index: number, qi: any, currentSelected: string}}) {
  return (
    <div
      id={`${data.index + 1}`}
      className="collapse collapse-arrow border border-base-300"
    >
      <input type="radio" name={`${data.index + 1}`} checked={data.currentSelected === (data.index + 1).toString()} />
      <div className="collapse-title font-medium">
        {data.index + 1}. {data.qi.title}
      </div>
      <div className="collapse-content">
        <div dangerouslySetInnerHTML={{ __html: data.qi.answer }}></div>
      </div>
    </div>
  );
}
