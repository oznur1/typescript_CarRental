import { useEffect, useRef, useState } from "react";
import { fetchCars } from "../../utils/service";
import type { ICar } from "../../types/";
import Warning from "../warning";
import Card from "../hero/card";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loader from "../loader/index";

const List = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";

  const firstCard = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchCars({ page: Number(page) }) // fetchCars fonksiyonunun page parametresini desteklemesi gerekiyor
      .then((data) => {
        setCars(data.results);
        setTotal(data.total_count);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  // Yükleniyor
  if (isLoading) return <Warning>Yükleniyor</Warning>;

  // Hata
  if (error) return <Warning>{error}</Warning>;

  // Veri yoksa
  if (!cars || cars.length < 1) return <Warning>Veri Bulunamadı</Warning>;

  return (
    <div>
      <section className="home-cars-wrapper">
        {cars.map((car, i) => (
          <div
            key={car.type_variante_version_tvv}
            ref={i === 0 ? firstCard : null}
          >
            <Card car={car} />
          </div>
        ))}
      </section>

      {total && (
        <ReactPaginate
          breakLabel="..."
          className="pagination"
          nextLabel=">"
          initialPage={Number(page) - 1}
          onPageChange={(e) => {
            searchParams.set("page", String(e.selected + 1));
            setSearchParams(searchParams);
            if (page !== "1") {
              firstCard.current?.scrollIntoView();
            }
          }}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(total / 10)}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </div>
  );
};

export default List;
