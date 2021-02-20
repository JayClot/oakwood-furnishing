import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Sofas",
          imageUrl:
            "https://d2kz53n3bzvihv.cloudfront.net/resized/790_395_0_255_255_255/media/gbu0/categoryxxl/image/Desktop-Header_1000x500px-Sofas.jpg.jpeg",
          linkUrl: "sofas",
          id: 1,
        },
        {
          title: "Tables",
          imageUrl:
            "https://casefurniture.com/wp-content/uploads/contemporary-dulwich-table-matthew-hilton-case-furniture-category-landscape.jpg",
          linkUrl: "tables",
          id: 2,
        },
        {
          title: "Wardrobes",
          imageUrl:
            "https://www.cuckooland.com/dnc/cuckooland//artwork/product_images/All-Black-Simple-4-Door-Wardrobe.jpg?quality=90&scale=canvas&width=1000&height=1000",
          linkUrl: "wardrobes",
          id: 3,
        },
        {
          title: "Bookshelves",
          imageUrl:
            "https://spy.com/wp-content/uploads/2019/11/floating-shelves-1.jpg?w=958&h=599&crop=1",
          linkUrl: "bookshelves",
          size: "large",
          id: 4,
        },
        {
          title: "Desks",
          imageUrl:
            "https://www.windowscentral.com/sites/wpcentral.com/files/styles/w1600h900crop/public/field/image/2019/12/best-computer-desk-hero.jpg",
          linkUrl: "desks",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem key={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
