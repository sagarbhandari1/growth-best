		var myArrayCountry = [{
		        "country": "Select Industry"
		    },
		    {
		        "country": "Automotives"
		    },
		    {
		        "country": "Beauty And Health"
		    },
		    {
		        "country": "Business Services"
		    },
		    {
		        "country": "Dealers And Distributors"
		    },
		    {
		        "country": "Education"
		    },
		    {
		        "country": "Fashion"
		    },
		    {
		        "country": "Food And Beverage"
		    },
		    {
		        "country": "Home Based Business"
		    },
		    {
		        "country": "Hotel, Travel And Tourism"
		    },
		    {
		        "country": "Retail"
		    },
		    {
		        "country": "Sports, Fitness And Entertainment"
		    }
		];

		function updateState() {
		    var zone = document.getElementById("country");
		    // alert("You clicked India.");

		    if (zone.value == "Automotives") {
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Automobile Related"
		            },
		            {
		                "state": "Commercial Vehicles"
		            },
		            {
		                "state": "Four Wheeler"
		            },
		            {
		                "state": "Two Wheeler"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Beauty And Health") {

		        // alert("You clicked United States.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Beauty Aesthetics And Supplies"
		            },
		            {
		                "state": "Health Care"
		            },
		            {
		                "state": "Wellness"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Business Services") {
		        // alert("You clicked United Kingdom.");

		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Advertisement And Media Services"
		            },
		            {
		                "state": "Consultancy"
		            },
		            {
		                "state": "Financial"
		            },
		            {
		                "state": "Household Services"
		            },
		            {
		                "state": "IT Services"
		            },
		            {
		                "state": "Logistics"
		            },
		            {
		                "state": "Real Estate"
		            },
		            {
		                "state": "Travel"
		            },
		            {
		                "state": "Waste Management And Recycling Services"
		            }
		        ];
		        stateFunction(myArrayState)
		    }


		    if (zone.value == "Dealers And Distributors") {
		        // alert("You clicked United Kingdom.");

		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Agriculture"
		            },
		            {
		                "state": "Automobile"
		            },
		            {
		                "state": "Building And Construction"
		            },
		            {
		                "state": "Computer Hardware, Mobile And Accessories"
		            },
		            {
		                "state": "Education"
		            },
		            {
		                "state": "Electronics And Electricals"
		            },
		            {
		                "state": "Environment And Pollution"
		            },
		            {
		                "state": "Fashion And Apparel"
		            },
		            {
		                "state": "Food And Beverage"
		            },
		            {
		                "state": "Health And Beauty"
		            },
		            {
		                "state": "Health-care, Medical, Pharma And Drugs"
		            },
		            {
		                "state": "Home Supplies"
		            },
		            {
		                "state": "Industrial Machinery"
		            },
		            {
		                "state": "Industrial Supplies"
		            },
		            {
		                "state": "Medical And Hospital Supplies"
		            },
		            {
		                "state": "Office Supplies"
		            },
		            {
		                "state": "Security And Protection"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Education") {
		        // alert("You clicked United Kingdom.");

		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Coaching And Tutoring"
		            },
		            {
		                "state": "Early Education"
		            },
		            {
		                "state": "Education Consultants"
		            },
		            {
		                "state": "Education Services"
		            },
		            {
		                "state": "Higher Education"
		            },
		            {
		                "state": "K-12 Education"
		            },
		            {
		                "state": "Online Education"
		            },
		            {
		                "state": "Vocational Training"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Fashion") {

		        // alert("You clicked United Kingdom.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Accessories"
		            },
		            {
		                "state": "Clothing"
		            },
		            {
		                "state": "Footwear"
		            },
		            {
		                "state": "Jewellery"
		            },
		            {
		                "state": "Luxury/Premium"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Food And Beverage") {

		        // alert("You clicked United Kingdom.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Bakery, Sweets And Ice Cream"
		            },
		            {
		                "state": "Cafe And Parlors"
		            },
		            {
		                "state": "Catering And Food Ordering"
		            },
		            {
		                "state": "Food And Beverage"
		            },
		            {
		                "state": "Quick Bites"
		            },
		            {
		                "state": "Restaurant And Night Clubs"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Home Based Business") {

		        // alert("You clicked United Kingdom.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Beauty And Fitness"
		            },
		            {
		                "state": "Business Services"
		            },
		            {
		                "state": "Home Based Businesses"
		            },
		            {
		                "state": "Home Based Food Preparation"
		            },
		            {
		                "state": "Home Based Manufacturing"
		            },
		            {
		                "state": "Home Based Tutoring"
		            },
		            {
		                "state": "Home Care Services"
		            },
		            {
		                "state": "Repair Services"
		            },
		            {
		                "state": "Technology Related"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Hotel, Travel And Tourism") {

		        // alert("You clicked United Kingdom.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Hotels And Resorts"
		            },
		            {
		                "state": "Taxi And Rental"
		            },
		            {
		                "state": "Tourism Services"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Retail") {

		        // alert("You clicked United Kingdom.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Books, Toys And Gifts"
		            },
		            {
		                "state": "Consumer Durables And It"
		            },
		            {
		                "state": "E-Retail"
		            },
		            {
		                "state": "Fashion"
		            },
		            {
		                "state": "Home And Office"
		            },
		            {
		                "state": "Supermarkets And Marts"
		            }
		        ];
		        stateFunction(myArrayState)
		    }

		    if (zone.value == "Sports, Fitness And Entertainment") {

		        // alert("You clicked United Kingdom.");
		        var myArrayState = [{
		                "state": "Select Sector"
		            },
		            {
		                "state": "Entertainment And Leisure"
		            },
		            {
		                "state": "Sports Goods And Fitness Stores"
		            }
		        ];
		        stateFunction(myArrayState)
		    }
		}

		function updateCity() {
		    var zone1 = document.getElementById("state");

		    if (zone1.value == "Automobile Related") {
		        // alert("You clicked India.");
		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Automobile Accessories"
		            },
		            {
		                "city": "Automobile Garage Related"
		            },
		            {
		                "city": "Automobile Maintanance Related"
		            },
		            {
		                "city": "Automobile Spares / Tyre"
		            },
		            {
		                "city": "Road Safety Equipments"
		            },
		            {
		                "city": "Security And Helpline Services"
		            },
		            {
		                "city": "Web Based/Online Platform"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Commercial Vehicles") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Agriculture Utility Vehicles"
		            },
		            {
		                "city": "Commercial Vehicles Bus/Trucks"
		            },
		            {
		                "city": "Electric Vehicles (E-Vehicles)"
		            },
		            {
		                "city": "Off Road / All Terrain Vehicles"
		            },
		            {
		                "city": "Three Wheeler (Auto) Showroom"
		            },
		            {
		                "city": "Tractors"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Four Wheeler") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Car Exterior Parts"
		            },
		            {
		                "city": "Car Interior Accessories"
		            },
		            {
		                "city": "Car Interior spares parts"
		            },
		            {
		                "city": "Car maintenance and repair services"
		            },
		            {
		                "city": "Car Rentals"
		            },
		            {
		                "city": "Car Reselling"
		            },
		            {
		                "city": "Car Showroom"
		            },
		            {
		                "city": "Car Wash Ceramic Coating"
		            },
		            {
		                "city": "Electric Four Wheeler"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Two Wheeler") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bicycle"
		            },
		            {
		                "city": "Bike Maintanance And Repair Services"
		            },
		            {
		                "city": "Bike Rental"
		            },
		            {
		                "city": "Bike Reselling"
		            },
		            {
		                "city": "Bike Showroom"
		            },
		            {
		                "city": "Bike Wash"
		            },
		            {
		                "city": "Biker's Accessories"
		            },
		            {
		                "city": "Electric Two Wheelers"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Beauty Aesthetics And Supplies") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bath Products"
		            },
		            {
		                "city": "Beauty Equipments"
		            },
		            {
		                "city": "Beauty Salons"
		            },
		            {
		                "city": "Cosmetic Accessories"
		            },
		            {
		                "city": "Cosmetics And Beauty Product Stores"
		            },
		            {
		                "city": "Pet Grooming"
		            },
		            {
		                "city": "Tattoo, Piercing And Nail Art"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Health Care") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Ayurvedic, Herbal And Organic Products"
		            },
		            {
		                "city": "Clinics And Nursing Homes"
		            },
		            {
		                "city": "Healthcare Products"
		            },
		            {
		                "city": "Hospitals"
		            },
		            {
		                "city": "Others Health Care And Fitness"
		            },
		            {
		                "city": "Pathological Labs"
		            },
		            {
		                "city": "Pharmacies"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Wellness") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Diet Consultancy"
		            },
		            {
		                "city": "Gyms And Fitness Centres"
		            },
		            {
		                "city": "Massage Centres"
		            },
		            {
		                "city": "Medical Spas/Med Spas/Medi Spas"
		            },
		            {
		                "city": "Meditation Centre"
		            },
		            {
		                "city": "Physiotheraphy Centre"
		            },
		            {
		                "city": "Slimming Center"
		            },
		            {
		                "city": "Spas"
		            },
		            {
		                "city": "Yoga Classes"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Advertisement And Media Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Ad Agencies And Collection Centres"
		            },
		            {
		                "city": "Digital Media And Internet Marketing"
		            },
		            {
		                "city": "Public Relations (PR)"
		            },
		            {
		                "city": "Publications And Print Media"
		            },
		            {
		                "city": "TV Channel/Network"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Consultancy") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "BPO"
		            },
		            {
		                "city": "Business"
		            },
		            {
		                "city": "Career Counseling"
		            },
		            {
		                "city": "Financial"
		            },
		            {
		                "city": "HR And Recruitment"
		            },
		            {
		                "city": "Immigration"
		            },
		            {
		                "city": "Legal"
		            },
		            {
		                "city": "Matrimonial"
		            },
		            {
		                "city": "Others Consultancy"
		            },
		            {
		                "city": "Real Estate"
		            },
		            {
		                "city": "Service For SMEs"
		            },
		            {
		                "city": "Technology"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Financial") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Accounting And Auditing Services"
		            },
		            {
		                "city": "Equity And Debt Providers"
		            },
		            {
		                "city": "Finance Advisors And Brokers"
		            },
		            {
		                "city": "Financial Investment And Trading"
		            },
		            {
		                "city": "Foreign Exchange (FOREX)"
		            },
		            {
		                "city": "Insurance"
		            },
		            {
		                "city": "Microfinance"
		            },
		            {
		                "city": "Non Banking Financial Company (NBFC)"
		            },
		            {
		                "city": "Others Financial"
		            },
		            {
		                "city": "Pawn Brokers"
		            },
		            {
		                "city": "Payment Solution Services"
		            },
		            {
		                "city": "Post Office Services"
		            },
		            {
		                "city": "Tax Consulting Services"
		            },
		            {
		                "city": "Wealth Management"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Household Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Appliance Rental Services"
		            },
		            {
		                "city": "Electrical And Plumbing Services"
		            },
		            {
		                "city": "Facility Management"
		            },
		            {
		                "city": "Gardening Services"
		            },
		            {
		                "city": "Home Appliances Repair Services"
		            },
		            {
		                "city": "Home Renovation Services"
		            },
		            {
		                "city": "Home Safety And Security"
		            },
		            {
		                "city": "Housekeeping"
		            },
		            {
		                "city": "Institutional/Facility Cleaning"
		            },
		            {
		                "city": "Laundry And Dry Cleaning"
		            },
		            {
		                "city": "Pest Control"
		            },
		            {
		                "city": "Repair Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "IT Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Cartridge Refilling"
		            },
		            {
		                "city": "Computer And ICT Services"
		            },
		            {
		                "city": "Management Software"
		            },
		            {
		                "city": "Printing Services"
		            },
		            {
		                "city": "Security Services"
		            },
		            {
		                "city": "Telecom"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Logistics") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Courier And Delivery"
		            },
		            {
		                "city": "Logistics Outsourcing"
		            },
		            {
		                "city": "Logistics Technology Provider"
		            },
		            {
		                "city": "Material Handling And Order Processing"
		            },
		            {
		                "city": "Supply Chain Management"
		            },
		            {
		                "city": "Transportation"
		            },
		            {
		                "city": "Trucking Logistics Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Real Estate") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Real Estate Sub"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Travel") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Car Rental And Cab Services"
		            },
		            {
		                "city": "Online Travel Services"
		            },
		            {
		                "city": "Others Travel"
		            },
		            {
		                "city": "Tour Packages"
		            },
		            {
		                "city": "Travel Agents"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Waste Management And Recycling Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Dismantling Services"
		            },
		            {
		                "city": "Electronic Waste Management Services"
		            },
		            {
		                "city": "Industrial Waste Treatment"
		            },
		            {
		                "city": "Landfill Services"
		            },
		            {
		                "city": "Oil Filtration Services"
		            },
		            {
		                "city": "Pollution Monitoring"
		            },
		            {
		                "city": "Scrap Dealers And Management Services"
		            },
		            {
		                "city": "Solid Waste Management"
		            },
		            {
		                "city": "Waste Disposal Services"
		            },
		            {
		                "city": "Waste Management Consultants"
		            },
		            {
		                "city": "Waste Management Services"
		            },
		            {
		                "city": "Water Tank Cleaning Services"
		            },
		            {
		                "city": "Water Treatment And Purification Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Agriculture") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Agro Products And Commodities"
		            },
		            {
		                "city": "Rural Products"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Automobile") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Automobile Accessorie"
		            },
		            {
		                "city": "Automobile Maintenance"
		            },
		            {
		                "city": "Automotive Electrical Parts"
		            },
		            {
		                "city": "Automotive Parts And Components"
		            },
		            {
		                "city": "Commercil Vehicles And Parts"
		            },
		            {
		                "city": "Electric Vehicles"
		            },
		            {
		                "city": "Engine, Engine Components, Spare Parts"
		            },
		            {
		                "city": "GPS Navigaiton And Tracking System"
		            },
		            {
		                "city": "Oil And Lubricants"
		            },
		            {
		                "city": "Tyre, Tube, Accessories"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Building And Construction") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bathroom And Toilet Accessories And Fittings"
		            },
		            {
		                "city": "Bricks And Cement And Sand Supplies"
		            },
		            {
		                "city": "Builder And Construction Hardware"
		            },
		            {
		                "city": "Building Architecture"
		            },
		            {
		                "city": "Building Decoration Products"
		            },
		            {
		                "city": "Doors/Wooden Door Panels"
		            },
		            {
		                "city": "Furnishing And Wood Works"
		            },
		            {
		                "city": "Paints And Allied Products"
		            },
		            {
		                "city": "Tiles"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Computer Hardware, Mobile And Accessories") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Computer Cable And Connectors"
		            },
		            {
		                "city": "Computer Parts And Accessories"
		            },
		            {
		                "city": "Mobile Accessories"
		            },
		            {
		                "city": "Software"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Education") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Educational Material"
		            },
		            {
		                "city": "School Supplies"
		            },
		            {
		                "city": "Smart Classes Material"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Electronics And Electricals") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Chargers"
		            },
		            {
		                "city": "Consumer Electronics"
		            },
		            {
		                "city": "Electronic Intruments"
		            },
		            {
		                "city": "Electronic Products And Components"
		            },
		            {
		                "city": "Energy Saving Devices"
		            },
		            {
		                "city": "Inverters, UPS And Battery Chargers"
		            },
		            {
		                "city": "LED Lights"
		            },
		            {
		                "city": "Lighting Products And Components"
		            },
		            {
		                "city": "Wires, Cables And Accessories And Conductors"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Environment And Pollution") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Solar Products"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Fashion And Apparel") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Baby And Kids Wear"
		            },
		            {
		                "city": "Denim-Garments, Fabrics And Bags"
		            },
		            {
		                "city": "Ethnic Wear"
		            },
		            {
		                "city": "Fabric And Accessories"
		            },
		            {
		                "city": "Fashion Accessories"
		            },
		            {
		                "city": "Footwear"
		            },
		            {
		                "city": "Jewellery"
		            },
		            {
		                "city": "Mens Wear"
		            },
		            {
		                "city": "Undergarments, Lingerie, Nightwear"
		            },
		            {
		                "city": "Women Wear"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Food And Beverage") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Beverages"
		            },
		            {
		                "city": "Confectionery And Bakery Products"
		            },
		            {
		                "city": "Cooking Oil"
		            },
		            {
		                "city": "Dairy Products"
		            },
		            {
		                "city": "Drinking Water"
		            },
		            {
		                "city": "Energy Drinks"
		            },
		            {
		                "city": "Packaged Food Products"
		            },
		            {
		                "city": "Snacks"
		            },
		            {
		                "city": "Spices"
		            },
		            {
		                "city": "Tea And Coffee Products"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Health And Beauty") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bath Products"
		            },
		            {
		                "city": "Cosmetics"
		            },
		            {
		                "city": "Hair Care Products"
		            },
		            {
		                "city": "Healthcare And Medical Products"
		            },
		            {
		                "city": "Herbal, Ayurvedic, Homeopathic And Natural Care Products"
		            },
		            {
		                "city": "Perfumes And Fragrances"
		            },
		            {
		                "city": "Personal Care Products"
		            },
		            {
		                "city": "Sanitation Products"
		            },
		            {
		                "city": "Skincare Products"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Health-care, Medical, Pharma And Drugs") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Herbal, Ayurvedic, Homeopathic And Natural Care Products"
		            },
		            {
		                "city": "Skincare Products"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Home Supplies") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bags And Luggage"
		            },
		            {
		                "city": "Bed Linen Bed Sheet, Pillow Cover, Quilts"
		            },
		            {
		                "city": "Cutlery, Crockery And Tableware"
		            },
		            {
		                "city": "Electric Fittings And Accessories"
		            },
		            {
		                "city": "Handicraft Products"
		            },
		            {
		                "city": "Home Cleaning Products"
		            },
		            {
		                "city": "Home Furnishing"
		            },
		            {
		                "city": "Home Furniture"
		            },
		            {
		                "city": "Household And Consumer Products"
		            },
		            {
		                "city": "Kitchen Appliances / Cookware"
		            },
		            {
		                "city": "Religious Products"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Industrial Machinery") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Agriculture Machine And Tools"
		            },
		            {
		                "city": "Cranes And Forklifts"
		            },
		            {
		                "city": "Farming Tools And Equipments"
		            },
		            {
		                "city": "Food Processing Plant And Machinery"
		            },
		            {
		                "city": "Pollution Control Machinery"
		            },
		            {
		                "city": "Printing Machinery And Equiment"
		            },
		            {
		                "city": "Water Treatment And Purifying Plant"
		            },
		            {
		                "city": "Welding Equipment And Machinery"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    /**/
		    if (zone1.value == "Industrial Supplies") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Energy Management System"
		            },
		            {
		                "city": "Fibre Glasses Products "
		            },
		            {
		                "city": "Hardware & Tools"
		            },
		            {
		                "city": "Packaging and Material"
		            },
		            {
		                "city": "Printing Material"
		            },
		            {
		                "city": "Solar Energy & Components"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Medical And Hospital Supplies") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Hospital Equipments"
		            },
		            {
		                "city": "Laboratory Equipments And Instruments"
		            },
		            {
		                "city": "Medical Equipments"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Office Supplies") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Electrical Equipments"
		            },
		            {
		                "city": "Office Equipmet And Supplies"
		            },
		            {
		                "city": "Office Furniture"
		            },
		            {
		                "city": "Office Stationery"
		            },
		            {
		                "city": "Paper And Paper Boards"
		            },
		            {
		                "city": "Printers And Scanners"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Security And Protection") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Fire Fighting And Fire Protection Equipments"
		            },
		            {
		                "city": "Surveillance Equipments"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    /**/
		    if (zone1.value == "Coaching And Tutoring") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "CAD/CAM/CAE And Multimedia"
		            },
		            {
		                "city": "Competitive Exam Coaching Institute"
		            },
		            {
		                "city": "Online Coaching"
		            },
		            {
		                "city": "Robotics And Technical Training"
		            },
		            {
		                "city": "School Tutoring"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Early Education") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Activity Centres, Day Care And Creches"
		            },
		            {
		                "city": "After School Activities"
		            },
		            {
		                "city": "Preschools"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Education Consultants") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Career Counselling And Brain Programming"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Education Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Education Supplies"
		            },
		            {
		                "city": "Mobile Application Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Higher Education") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Degree/Diploma Colleges"
		            },
		            {
		                "city": "Distance Learning Centres"
		            },
		            {
		                "city": "Professional Education Colleges"
		            },
		            {
		                "city": "Universities (including Overseas Franchises)"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "K-12 Education") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Extra Curriculum Activities"
		            },
		            {
		                "city": "Schools"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Online Education") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Certification Course Coaching"
		            },
		            {
		                "city": "College/University Distance Education"
		            },
		            {
		                "city": "Corporate Training"
		            },
		            {
		                "city": "Entrance Examination Coaching"
		            },
		            {
		                "city": "Foreign Language Coaching"
		            },
		            {
		                "city": "Online Learning/E-learning"
		            },
		            {
		                "city": "Other Online Education"
		            },
		            {
		                "city": "Professional Education Coaching"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Vocational Training") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Aviation And Hospitality Training Institute"
		            },
		            {
		                "city": "BPO/KPO Training Institutes"
		            },
		            {
		                "city": "Banking And Insurance Training Institute"
		            },
		            {
		                "city": "Beauty And Wellness Training Institute"
		            },
		            {
		                "city": "Financial Advisory"
		            },
		            {
		                "city": "HR Certification Institute"
		            },
		            {
		                "city": "IT Education"
		            },
		            {
		                "city": "Language Schools"
		            },
		            {
		                "city": "Other Vocational Training"
		            },
		            {
		                "city": "Paramedical/Medical Training"
		            },
		            {
		                "city": "Retail Training Institutes"
		            },
		            {
		                "city": "Skills / Personality Development"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }

		    if (zone1.value == "Accessories") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Fashion Accessories"
		            },
		            {
		                "city": "Leather Products (bags, Purses And Belts)"
		            },
		            {
		                "city": "Luggage, Hand Bags And Backpacks"
		            },
		            {
		                "city": "Opticians/Eye Wear"
		            },
		            {
		                "city": "Watches"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Clothing") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Departmental/Unisex"
		            },
		            {
		                "city": "Ethnic Stores"
		            },
		            {
		                "city": "Kids Wear"
		            },
		            {
		                "city": "Lingerie And Innerwear"
		            },
		            {
		                "city": "Men Innerwear"
		            },
		            {
		                "city": "Others Clothing"
		            },
		            {
		                "city": "Readymade"
		            },
		            {
		                "city": "Sports Wear"
		            },
		            {
		                "city": "Textiles"
		            },
		            {
		                "city": "Women's Wear"
		            },
		            {
		                "city": "Woollens"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Footwear") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Casuals"
		            },
		            {
		                "city": "Designer"
		            },
		            {
		                "city": "Formals"
		            },
		            {
		                "city": "Kids"
		            },
		            {
		                "city": "Sports"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Jewellery") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Diamond And Platinum Wears"
		            },
		            {
		                "city": "Gems And Stones"
		            },
		            {
		                "city": "Imitation/Art/Junk Jewellery"
		            },
		            {
		                "city": "Precious Jewellery"
		            },
		            {
		                "city": "Time And Writing Instruments"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Luxury/Premium") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Designer Wear"
		            },
		            {
		                "city": "Luxury Labels"
		            },
		            {
		                "city": "Vintage Stores"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Bakery, Sweets And Ice Cream") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bakery And Confectionary"
		            },
		            {
		                "city": "Chocolate Stores"
		            },
		            {
		                "city": "Ice Creams And Yogurt Parlors"
		            },
		            {
		                "city": "Snacks / Namkeen Shops"
		            },
		            {
		                "city": "Sweetshop"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Cafe And Parlors") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Juices / Smoothies / Dairy Parlors"
		            },
		            {
		                "city": "Tea And Coffee Chain"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Catering And Food Ordering") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Catering"
		            },
		            {
		                "city": "Online Food Ordering Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Food And Beverage") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Others Food Service"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Quick Bites") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Express Food Joints / Drive Through"
		            },
		            {
		                "city": "Mobile Vans And Food Trucks"
		            },
		            {
		                "city": "Pizzeria"
		            },
		            {
		                "city": "Quick Service Restaurants"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Restaurant And Night Clubs") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bars, Pubs And Lounge"
		            },
		            {
		                "city": "Casual Dine Restaurants"
		            },
		            {
		                "city": "Fine Dine Restaurants"
		            },
		            {
		                "city": "Multi Cuisine Restaurant"
		            },
		            {
		                "city": "Theme Restaurants"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Beauty And Fitness") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Beauty Stylist"
		            },
		            {
		                "city": "Massage Therapist"
		            },
		            {
		                "city": "Personal Trainer (fitness/health Recovery)"
		            },
		            {
		                "city": "Yoga Centre / Trainer"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Business Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Accountant"
		            },
		            {
		                "city": "Astrology And Tarot"
		            },
		            {
		                "city": "Business Planner"
		            },
		            {
		                "city": "Consulting Services"
		            },
		            {
		                "city": "Direct Selling (Door-to-Door Etc.)"
		            },
		            {
		                "city": "Event Planning"
		            },
		            {
		                "city": "Financial Planner (CFA)"
		            },
		            {
		                "city": "Freelance Writing / Copy Writer"
		            },
		            {
		                "city": "Income Tax Filing Services"
		            },
		            {
		                "city": "Language Translator"
		            },
		            {
		                "city": "Lawyer And Legal Services"
		            },
		            {
		                "city": "MLM Businesses"
		            },
		            {
		                "city": "Matrimonial"
		            },
		            {
		                "city": "Notary Public"
		            },
		            {
		                "city": "Part Time / Flexi Time Businesses"
		            },
		            {
		                "city": "Trading Expert"
		            },
		            {
		                "city": "Warehousing Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Home Based Businesses") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Astrology And Tarot"
		            },
		            {
		                "city": "Boutique"
		            },
		            {
		                "city": "Consulting"
		            },
		            {
		                "city": "Direct Selling (Door-to-Door Etc.)"
		            },
		            {
		                "city": "MLM Businesses"
		            },
		            {
		                "city": "Others Home Based Businesses"
		            },
		            {
		                "city": "Part Time/Flexi Time Businesses"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Home Based Food Preparation") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bakery Items Preparation"
		            },
		            {
		                "city": "Ice Cream Making"
		            },
		            {
		                "city": "Processed Food Manufacturing"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Home Based Manufacturing") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Costume Stitching (Boutique)"
		            },
		            {
		                "city": "Furniture Works"
		            },
		            {
		                "city": "Gift Item Making And Selling"
		            },
		            {
		                "city": "Handicraft Making And Selling"
		            },
		            {
		                "city": "Jewellery Making"
		            },
		            {
		                "city": "Jute Bag Making"
		            },
		            {
		                "city": "Machinery Spare Parts Making"
		            },
		            {
		                "city": "Paper Bag Making"
		            },
		            {
		                "city": "Religious (Pooja) Material Manufacturing"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Home Based Tutoring") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Dance Coaching Classes"
		            },
		            {
		                "city": "Music Coaching Classes"
		            },
		            {
		                "city": "School Tutoring"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Home Care Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Cleaning Service"
		            },
		            {
		                "city": "Day-care Services"
		            },
		            {
		                "city": "Home Appliance Repair"
		            },
		            {
		                "city": "Interior Decorator"
		            },
		            {
		                "city": "Logistics Packers And Movers (inter/intra City)"
		            },
		            {
		                "city": "Pet Care Services"
		            },
		            {
		                "city": "Property Management"
		            },
		            {
		                "city": "Senior Citizen Home Healthcare Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Repair Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Computer / Phone Repair"
		            },
		            {
		                "city": "Electronics Repair"
		            },
		            {
		                "city": "Home Appliance Repair"
		            },
		            {
		                "city": "Mechanic Work"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Technology Related") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Application Designer"
		            },
		            {
		                "city": "Computer Training"
		            },
		            {
		                "city": "Data Entry Services"
		            },
		            {
		                "city": "Internet Blogger"
		            },
		            {
		                "city": "Software Trainer"
		            },
		            {
		                "city": "Video Making Services"
		            },
		            {
		                "city": "Web Based Platform"
		            },
		            {
		                "city": "Web Designer / Website Developer"
		            },
		            {
		                "city": "YouTube Blogger"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Hotels And Resorts") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Booking And Accomodation"
		            },
		            {
		                "city": "Guest House / Service Apartments"
		            },
		            {
		                "city": "Hotel Chain"
		            },
		            {
		                "city": "Hotel Supplier"
		            },
		            {
		                "city": "Motels And BandB"
		            },
		            {
		                "city": "PG Services"
		            },
		            {
		                "city": "Resort"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Taxi And Rental") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bus Rental"
		            },
		            {
		                "city": "Cab Services"
		            },
		            {
		                "city": "Car Rental Services"
		            },
		            {
		                "city": "Chauffer / Driver Services"
		            },
		            {
		                "city": "Corporate Charter Services"
		            },
		            {
		                "city": "Ticketing Services"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Tourism Services") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Adventure Tourism"
		            },
		            {
		                "city": "Business Tourism"
		            },
		            {
		                "city": "Holiday Services"
		            },
		            {
		                "city": "Honeymoon Services"
		            },
		            {
		                "city": "Online Travel Services"
		            },
		            {
		                "city": "Passport And Visa Services"
		            },
		            {
		                "city": "Tour Package"
		            },
		            {
		                "city": "Travel Agent"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Books, Toys And Gifts") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Book Stores"
		            },
		            {
		                "city": "Candle Stores"
		            },
		            {
		                "city": "Corporate Gifting"
		            },
		            {
		                "city": "Deal/Value Stores"
		            },
		            {
		                "city": "Florists"
		            },
		            {
		                "city": "Gift Shops And Card Galleries"
		            },
		            {
		                "city": "Kids/Candy Stores"
		            },
		            {
		                "city": "Kiosks"
		            },
		            {
		                "city": "Office Supply Stores"
		            },
		            {
		                "city": "Party Supplies"
		            },
		            {
		                "city": "Souvenir Shops"
		            },
		            {
		                "city": "Stationery Stores"
		            },
		            {
		                "city": "Toy Shops"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Consumer Durables And It") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Computers And Peripherals"
		            },
		            {
		                "city": "Consumer Electronics"
		            },
		            {
		                "city": "DVD Rentals"
		            },
		            {
		                "city": "Mobile And Communication/Internet Connections"
		            },
		            {
		                "city": "Music Equipment And Music Stores"
		            },
		            {
		                "city": "Other Electronics And Electrical Prod"
		            },
		            {
		                "city": "Photography"
		            },
		            {
		                "city": "Web Design And Applications"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "E-Retail") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "E-Commerce And Related"
		            },
		            {
		                "city": "Mobile Commerce"
		            },
		            {
		                "city": "TV/Web Shopping"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Fashion") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Bags And Luggage"
		            },
		            {
		                "city": "Designer Jewellery"
		            },
		            {
		                "city": "Fashion Accessories - Men"
		            },
		            {
		                "city": "Fashion Accessories - Women"
		            },
		            {
		                "city": "Kids And Children Clothing"
		            },
		            {
		                "city": "Men's Clothing"
		            },
		            {
		                "city": "Men's Footwear"
		            },
		            {
		                "city": "Women's Clothing"
		            },
		            {
		                "city": "Women's Footwear"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Home And Office") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Art, Craft, Antique And Framing"
		            },
		            {
		                "city": "Bathroom And Ceramics"
		            },
		            {
		                "city": "Building Material Stores"
		            },
		            {
		                "city": "Furniture/Home Decor And Furnishing"
		            },
		            {
		                "city": "Garden Stores"
		            },
		            {
		                "city": "Handicrafts"
		            },
		            {
		                "city": "Hardware Stores"
		            },
		            {
		                "city": "Home Security"
		            },
		            {
		                "city": "Kitchen"
		            },
		            {
		                "city": "Lighting, Electrical And Plumbing"
		            },
		            {
		                "city": "Painting"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Supermarkets And Marts") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Dairy/FandV Stores"
		            },
		            {
		                "city": "Department And Convenience Stores"
		            },
		            {
		                "city": "Food Marts"
		            },
		            {
		                "city": "Gourmet Stores"
		            },
		            {
		                "city": "Grocery Stores"
		            },
		            {
		                "city": "Kiosks"
		            },
		            {
		                "city": "Meat And Chicken Shops"
		            },
		            {
		                "city": "Organic Products"
		            },
		            {
		                "city": "Pet Stores"
		            },
		            {
		                "city": "Superstores"
		            },
		            {
		                "city": "Wine Shops"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		    if (zone1.value == "Entertainment And Leisure") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Amusement Centres"
		            },
		            {
		                "city": "Children's Park Amenities"
		            },
		            {
		                "city": "Clubs"
		            },
		            {
		                "city": "Kids Entertainment Zones"
		            },
		            {
		                "city": "Mini Water Park"
		            },
		            {
		                "city": "Movies (Multiplex)"
		            },
		            {
		                "city": "Others Entertainment And Leisure"
		            },
		            {
		                "city": "Sports And Gaming"
		            },
		            {
		                "city": "Video Game Centres"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }
		    if (zone1.value == "Sports Goods And Fitness Stores") {
		        // alert("You clicked India.");

		        var myArrayCity = [{
		                "city": "Select Service/Product"
		            },
		            {
		                "city": "Adventurous Sporting"
		            },
		            {
		                "city": "Diet Supplimentary"
		            },
		            {
		                "city": "Fitness Accessories"
		            },
		            {
		                "city": "Fitness Equipment Stores"
		            },
		            {
		                "city": "Golf Stores"
		            },
		            {
		                "city": "Sports Accessories"
		            },
		            {
		                "city": "Sports Equipment Stores"
		            },
		            {
		                "city": "Sports Garments"
		            }
		        ];
		        cityFunction(myArrayCity)
		    }


		}

		countryFunction(myArrayCountry);

		function countryFunction(arr) {
		    var out = "";
		    var i;

		    for (i = 0; i < arr.length; i++) {
		        out += '<option value="' + arr[i].country + '">' + arr[i].country + '</option>' +
		            arr[i].display + '</a><br>';
		    }
		    document.getElementById("country").innerHTML = out;
		}


		var myArrayState = [{
		    "state": "Select Sector"
		}];
		stateFunction(myArrayState);

		function stateFunction(arr) {
		    var out = "";
		    var i;

		    for (i = 0; i < arr.length; i++) {
		        out += '<option value="' + arr[i].state + '">' + arr[i].state + '</option>' +
		            arr[i].display + '</a><br>';
		    }
		    document.getElementById("state").innerHTML = out;
		}


		var myArrayCity = [{
		    "city": "Select Service/Product"
		}];
		cityFunction(myArrayCity);

		function cityFunction(arr) {
		    var out = "";
		    var i;

		    for (i = 0; i < arr.length; i++) {
		        out += '<option value="' + arr[i].city + '">' + arr[i].city + '</option>' +
		            arr[i].display + '</a><br>';
		    }
		    document.getElementById("city").innerHTML = out;
		}