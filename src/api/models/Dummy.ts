// 제목, 사진, 썸네일, 본문, 작성자, 좋아요, 삭제여부
export default interface IDummy {
  id: number;
  title: string;
  pictures: string[];
  // thumbnail: string;
  content: string;
  author: string;
  favoriates: number;
  isDel: boolean;

  createdAt: Date;
}
