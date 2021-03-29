import React from 'react';
import Detail from '../components/Detail';
import { useParams} from "react-router-dom";
const DetailPage = ({ match }) => {
  let { id } = useParams();
  return (
    <div>
      <Detail detailVideoId={id}></Detail>
    </div>
  )
}

export default DetailPage;