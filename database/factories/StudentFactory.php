<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Enums\GenderEnum;

class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'cpf' => fake()->unique()->cpf(),
            'rg' => fake()->unique()->rg(),
            'gender' => fake()->randomElement(GenderEnum::values()),
            'birthday' => fake()->date(),
            'birthplace' => fake()->city(),
            'phone' => fake()->cellphoneNumber(),
            'address_street' => fake()->streetAddress(),
            'address_city' => fake()->city(),
            'address_state' => fake()->state(),
            'address_zip_code' => fake()->postcode(),
            'gov_benefits' => fake()->sentence(),
            'health_problems' => fake()->sentence(),
            'note' => fake()->text(),
            'is_active' => true,
        ];
    }
}
