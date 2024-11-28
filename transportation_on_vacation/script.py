rental_cost_day = 40


def rental_car_cost(d):
   
    if d >= 7:
        total_rent_cost = rental_cost_day * d - 50

    elif d >= 3:
        total_rent_cost = rental_cost_day * d - 20

    else: total_rent_cost = rental_cost_day * d

    return total_rent_cost

print (rental_car_cost(8))


