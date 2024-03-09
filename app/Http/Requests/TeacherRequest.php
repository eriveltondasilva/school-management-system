<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'             => ['required', 'string', 'max:255'],
            'rg'               => [ 'nullable', 'string', 'max:255'],
            'cpf'              => [ 'nullable', 'string', 'max:255'],
            'birthday'         => [ 'nullable', 'date'],
            'email'            => [ 'nullable', 'string', 'email', 'max:255'],
            'phone'            => [ 'nullable', 'string', 'max:255'],
            'gender'           => [ 'nullable', 'string', 'max:255'],
            'address_street'   => [ 'nullable', 'string', 'max:255'],
            'address_city'     => [ 'nullable', 'string', 'max:255'],
            'address_state'    => [ 'nullable', 'string', 'max:255'],
            'address_zip_code' => [ 'nullable', 'string', 'max:255'],
            'is_active'        => [ 'nullable', 'boolean'],
        ];
    }
}
