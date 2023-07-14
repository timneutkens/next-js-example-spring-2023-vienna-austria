// import { notFound } from 'next/navigation';
// import { getFruitById } from '../../../database/fruits';
// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
// import FruitCommentForm from './FruitCommentForm';

function MemoryUsage() {
  const mem = process.memoryUsage();

  return (
    <div>
      <div>rss: {mem.rss / 1000000}</div>
      <div>heapTotal: {mem.heapTotal / 1000000}MB</div>
      <div>heapUsed: {mem.heapUsed / 1000000}MB</div>
      <div>external: {mem.external / 1000000}MB</div>
      <div>arrayBuffers: {mem.arrayBuffers / 1000000}MB</div>
    </div>
  );
}

type Props = {
  params: { fruitId: string };
};

export type CookieCommentItem = {
  id: number;
  comment?: string;
};

export default function FruitPage(props: Props) {
  return <MemoryUsage />;

  // const fruit = getFruitById(Number(props.params.fruitId));

  // if (!fruit) {
  //   notFound();
  // }

  // const fruitCommentsCookie = getCookie('fruitComments');
  // const fruitComments = !fruitCommentsCookie
  //   ? []
  //   : parseJson(fruitCommentsCookie);

  // const fruitToUpdate = fruitComments?.find((fruitComment) => {
  //   return fruitComment.id === fruit.id;
  // });

  // return (
  //   <>
  //     <MemoryUsage />
  //     <h1>
  //       {fruit.icon} {fruit.name}
  //     </h1>
  //     {fruitToUpdate?.comment}
  //     <FruitCommentForm fruitId={fruit.id} />
  //   </>
  // );
}
