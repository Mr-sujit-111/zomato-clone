import React from 'react'
import Card from './Card';
import '../css/Card.css';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CollectionCard from './CollectionCard';

function Category(props) {
    const { sectionName } = props;
    return (
        <>
            <h5 className="col-sm-12 mt-5 text-center category__heading">{sectionName}</h5>
            <div className="row category__container">
                {sectionName === "Collections Section" ?
                    <>
                        <div className="row">
                            <div className="col-lg-10 col-sm-12">
                                <h5 className="mx-5">Explore curated lists of top restaurants, cafes, pubs, and bars in Surat, based on trends </h5>
                            </div>
                            <div className="col-lg-2 col-sm-12">
                                <Button variant="text" endIcon={<ArrowDropDownIcon />}>
                                    Explore more
                                </Button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <CollectionCard heading="Live Sport Screening" numberOfPlaces="12 places" image="category4.jpg" />
                            <CollectionCard heading="Veggie Friendly" numberOfPlaces="19 places" image="category3.jpg" />
                            <CollectionCard heading="Best of Surat" numberOfPlaces="17 places" image="category2.jpg" />
                            <CollectionCard heading="Trending This week" numberOfPlaces="28 places" image="category1.jpg" />
                        </div>
                    </> :
                    <>
                        <Card categoryName="Online Order" image="category1.jpg" />
                        <Card categoryName="Dining Out" image="category2.jpg" />
                        <Card categoryName="pro and pro plus" image="category3.jpg" />
                        <Card categoryName="NighLife and Club" image="category4.jpg" />
                    </>
                }
            </div>
        </>
    )
}

export default Category